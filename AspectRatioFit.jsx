/*

// BEGIN__HARVEST_EXCEPTION_ZSTRING

<javascriptresource>
<name>$$$/JavaScripts/AspectRatioFit/Menu=Bulk Aspect Ratio Fit...</name>
<category>AAA TOP</category>
<eventid>1F9021B1-5045-42E1-AE2A-7E504FAA8D51</eventid>
</javascriptresource>

// END__HARVEST_EXCEPTION_ZSTRING

*/

// enable double clicking from the Macintosh Finder or the Windows Explorer
#target photoshop

var backgroundColorOriginal = app.backgroundColor;

var color = app.backgroundColor;
color.rgb.red = 255;
color.rgb.green = 255;
color.rgb.blue = 255;
app.backgroundColor = color;

var inputFolder = Folder.selectDialog("Select a folder to process");
var fileList = inputFolder.getFiles(/\.(jpe?g|tif|psd|crw|cr2|nef|dcr|dc2|raw|gif|png)$/i); //Use whatever extension you want or no extension to select all files

for (var i = 0; i < fileList.length; i++) {
    open(fileList[i]);

    var width = app.activeDocument.width
    var height = app.activeDocument.height
    if (width > height) {
        app.activeDocument.resizeCanvas(width, width)
    } else {
        app.activeDocument.resizeCanvas(height, height)
    }

    app.activeDocument.save();
    app.activeDocument.close();
}