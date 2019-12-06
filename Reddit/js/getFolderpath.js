function getAllFolderTitlePaths(folderId) {
    var FOLDER_PATH_SEPARATOR = '/';
    var paths = [];
   
    function process(fId, postfix) {
        var f = $w.folders.getById(fId);
        var pf = f && $wrike.record.Base.getFullParentFolderIds(f.data.parentFolders);
       
        if (f) {
            postfix = f.data.title + (postfix ? FOLDER_PATH_SEPARATOR : '') + postfix;
        }
       
        if (!pf || !pf.length) {
            paths.push(postfix);
        } else {
            pf.forEach(function(pid) {
                process(pid, postfix);
            });
        }
    }
   
    process(folderId, '');
   
    return paths;
}
 
function getAllTaskTitlePaths(taskId) {
    var TASK_PATH_SEPARATOR = '|';
    var deferred = Q.defer();
    var paths = [];
   
    var t = $wrike.task(taskId);
    $jin.when([
        t.title_atom(),
        t.parentTasks_atom(),
        t.parentFoldersFull_atom()
    ]).then(function() {
        var title = t.title();
        var pf = t.parentFoldersFull();
        pf.forEach(function(parentFolder) {
            paths = paths.concat(
                getAllFolderTitlePaths(parentFolder.id()).map(function(folderPath) {
                    return folderPath + TASK_PATH_SEPARATOR + title;
                })
            );
        });
       
        var pt = t.parentTasks();
       
        if (pt.length) {
            Q.all(pt.map(function(parentTask) {
                return getAllTaskTitlePaths(parentTask.id());
            })).then(function(parentTaskPaths) {
                parentTaskPaths.forEach(function(list) {
                    paths = paths.concat(
                        list.map(function(pth) {
                            return pth + TASK_PATH_SEPARATOR + title;
                        })
                    );
                });
               
                deferred.resolve(paths);
            })
        } else {
            deferred.resolve(paths);
        }
    });
   
    return deferred.promise;
}
 
//Example
console.log(getAllFolderTitlePaths(123));
 
getAllTaskTitlePaths(321).then(function(paths) {console.log(paths)})