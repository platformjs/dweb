//create string for an object
//not formatted well
function namespace(obj, result, space) {
    if (result.length === 0) {
        result.push("{");
    }
    const newSpace = space + "  ";
    for (let p in obj) {
        if (typeof obj[p] === "string") {
            result.push(newSpace + p + ": " + obj[p] + ",");
        } else {
            result.push(newSpace + p + ": {");
            namespace(obj[p], result, newSpace + "  ");
            result[result.length - 1] += ",";
        }
    }
    result.push(space + "}");
}

function quickname(paths, excludePrefix) {
    const obj = {};
    let importStr = [];
    paths.forEach(path => {
        let pathNames = path.split("/");
        //get rid of .js at the end
        const name = pathNames[pathNames.length - 1].split(".")[0];
        //use full name to keep it unique for supporting duplicate name
        const fullName = pathNames.join("").split(".").join("");
        importStr.push(`import ${fullName} from "${path}";`);
        

        path = path.substr(excludePrefix.length || 0);
        pathNames = path.split("/");
        pathNames.pop();
        let current = obj;
        pathNames.forEach(p => {
            if (!current[p]) {
                current[p] = {};
            }
            current = current[p];
        });
        current[name] = fullName;
    });
    console.log(obj);
    const result = [];
    namespace(obj, result, "");
    return importStr.join("\n") + "\nexport default\n " + result.join("\n");
}

function pkg (inputPattern, outputFile, excludePrefix, glob, fs) {
    console.log(arguments, "pkg=======")
    const paths = [];
    glob.sync(inputPattern).forEach(path => {
        // let name = path.split("/");
        // name = name[name.length - 1].split(".")[0];
        // if (name !== "index") {
        //     paths.push(path);
        // }
        console.log(path);
        paths.push(path);
    });
    fs.writeFile(outputFile, quickname(paths, excludePrefix), function(err, data){
        if (err) console.log(err);
        else console.log("Successfully Written to File.");
    });
}

module.exports = pkg;