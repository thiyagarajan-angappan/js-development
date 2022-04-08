import fs from 'fs';

// fs.readFile('/home/courier/studies/code/groovy/converted.json', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(JSON.parse(data));
// });

function mapPlugins(data){
    let index = data.indexOf('plugins');
    let dep = data.substring(index);
    dep = dep.substring(dep.indexOf('{') + 1, dep.indexOf('}'));
    let result = dep.split('\n').filter ( line => line !== '' && line.indexOf('//') === -1).map( line => line.replace('\t', ''));

    // let depMap = {
    // };

    // result.map( depline => {
    //     let word = depline.substring(0, depline.indexOf(' '));
    //     depMap[`${word}`] = [...depMap[`${word}`], depline.substring(depline.indexOf('\''))];
    // });

    console.log(result);
}

function mapDeps(data){
    let index = data.indexOf('dependencies');
    let dep = data.substring(index);
    dep = dep.substring(dep.indexOf('{') + 1, dep.indexOf('}'));
    let result = dep.split('\n').filter ( line => line !== '' && line.indexOf('//') === -1).map( line => line.replace('\t', ''));

    let depMap = {
        implementation: [],
        testImplementation: [],
        runtimeOnly: []
    };

    result.map( depline => {
        let word = depline.substring(0, depline.indexOf(' '));
        depMap[`${word}`] = [...depMap[`${word}`], depline.substring(depline.indexOf('\''))];
    });

    console.log(depMap);
}

fs.readFile('/home/courier/studies/code/docker/testing/spring-web/myrestapp/build.gradle', 'utf-8', (err, data) => {
    mapDeps(data);
    mapPlugins(data);
});