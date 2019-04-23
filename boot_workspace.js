// This code should be pasted into the ChiliPeppr Edit Boot Javascript dialog box
// located in the upper right corner of any chilipeppr.com page.
// The ChiliPeppr environment has a standard div called #pnlWorkspace that
// this workspace should be loaded into.
chilipeppr.load(
  "#pnlWorkspace",
  "https://raw.githubusercontent.com/ianicbrisson/ianic-cnc/master/auto-generated-workspace.html",
  function() {
    // Callback after workspace loaded into #pnlWorkspace
    // Now use require.js to get reference to instantiated workspace
    cprequire(
      ["inline:com-chilipeppr-workspace-grbl"], // the id you gave your workspace
      function(myWorkspaceGrbl) {
        // Callback that is passed reference to the newly loaded workspace
        console.log("Workspace / grbl just got loaded.", myWorkspaceGrbl);
        myWorkspaceGrbl.init();
      }
    );
  }
);
