
module.exports = function (grunt) {
 grunt.initConfig({
   express: {
     test: {
       options: {
         script: "index.js"
       }
     }
   },
   mochaTest: {
     test: {
       options: {
         reporter: 'spec-xunit-file'
       },
       src: ["./test.js"]
     },
     test1: {
      options: {
       reporter: 'spec-xunit-file'
      },
      src: ["./test1.js"]
     }
   }
 });
 grunt.loadNpmTasks("grunt-express-server");
 grunt.loadNpmTasks("grunt-mocha-test");
 grunt.registerTask("default", "mochaTest:test1");
};
