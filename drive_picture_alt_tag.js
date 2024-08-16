
    //Drive Picture Alt Tag
    //v1.0 - Andy Griffith. Initial Rollout

    /* This is the target to add alt text to: 
    <img class="McKOwe" src="https://www.google.com/images/icons/product/drive-32.png">

    */

    drivePictures = document.querySelectorAll('.McKOwe');

if (typeof drivePictures !== 'undefined' && drivePictures !== null && drivePictures.length > 0) {

    console.log("Possible Drive Pictures Found: " + drivePictures.length);

    //Cast to an array
    var drivePicturesArray = [...drivePictures];
    var totalDrivePictures = 0;

    drivePicturesArray.forEach(drivePictureElement => {

        if (drivePictureElement.src = "https://www.google.com/images/icons/product/drive-32.png") {

            drivePictureElement.setAttribute('alt', 'Google Drive Icon');
            totalDrivePictures++;

        }
		
		
		/* For Local testing - DELETE
		if (drivePictureElement.src = "./Drive_Picture_Alt_Tag_files/drive-32.png") {
            drivePictureElement.setAttribute('alt', 'Google Drive Icon');
            totalDrivePictures++;
        }
		*/
		
		

    });

    console.log("Total Google Drive Pictures updated: " + totalDrivePictures);

}
