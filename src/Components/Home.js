import homeImage from "../img/home-image.jpg"
import crr_policy from "../files/Client_Rights_and_Responsibilities_Policy.pdf"
import grievance_policy from "../files/Grievance_Policy.pdf"
import "../css/Page.css"
function Home() {
    const handleOpenPdf = (documentPath,filename) => {
        if (window.cordova) {
            window.resolveLocalFileSystemURL(documentPath, function (fileEntry) {
                window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                    fileEntry.copyTo(dirEntry, filename, function (newFileEntry) {
                        cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                            {
                                error: function (e) {
                                    console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
                                },
                                success: function () {
                                    console.log('file opened successfully');
                                }
                            }
                        );
                    });
                });
            });


        }
    }
    return (
        <div className="content">
            <img src={homeImage} className="content-img" />
            <h1>Welcome to Hope Health Systems!</h1>
            <p>Founded in Woodlawn, Maryland in 1999, Hope Health Systems is a private, for-profit organization with nearly a decade of experience in providing direct mental health, substance abuse, and community support services to adult, child, and adolescent clients in institutional and outpatient settings in Maryland.</p>
            <a href={grievance_policy} download="Grievance Policy.pdf" onClick={()=>{handleOpenPdf(cordova.file.applicationDirectory + "www/static/media/Grievance_Policy.9a57c2c73e091a70a3ac.pdf","Grievance_Policy.pdf")}} className="btn" id="gPolicy">Grievance Policy</a>
            <a href={crr_policy} download="Client Rights and Responsibilities Policy.pdf" onClick={()=>{handleOpenPdf(cordova.file.applicationDirectory + "www/static/media/Client_Rights_and_Responsibilities_Policy.867567c6ae0e9cb88b1f.pdf","Client_Rights_and_Responsibilities_Policy.pdf")}} className="btn" id="crrPolicy">Client's Right and Responsibilities Policy</a>
        </div>
    )
}

export default Home;