import homeImage from "../img/home-image.jpg"
import crr_policy from "../files/Client_Rights_and_Responsibilities_Policy.pdf"
import grievance_policy from "../files/Grievance_Policy.pdf"
import "../css/Page.css"
function Home() {
    const handleOpenPdf = (documentPath, filename) => {
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
            <h2>Services we provide:</h2>
            <div className="cards">
                <div className="card">
                    <h3>OMHC</h3>
                    <p>Services designed to decrease the prevalence and incidence of mental illness, emotional disturbance and social dysfunction in youth and adults.</p>
                </div>
                <div className="card">
                    <h3>Behavioral Health Care Coordination</h3>
                    <p>Our program assists minors with psychiatric illnesses while providing their families with support and access to resources within the community.</p>
                </div>
                <div className="card">
                    <h3>Expanded School Mental Health</h3>
                    <p>For over 10 years, we've participated in State and administrative ESMH programs by supporting youth in education with assessment, prevention, case management, and treatment.</p>
                </div>
                <div className="card">
                    <h3>Substance Abuse Treatment</h3>
                    <p>Designed to treat the whole person, not just the addiction, we offer a holistic and highly individualized substance abuse treatment program for youth and adults.</p>
                </div>
                <div className="card">
                    <h3>Hope Health Systems Laboratory</h3>
                    <p>Our lab is a fully functioning PCR COVID-19 testing laboratory and is currently offering COVID-19 testing. We are proud to be accredited by CLIA (Clinical laboratory improvement amendments) and CAP (College of American Pathologist).</p>
                </div>
                <div className="card">
                    <h3>Partial Hospitalization Programs</h3>
                    <p>Designed to support and help stabilize acute symptoms and prevent hospitalization or ER visits for adults, children and adolescents. Our Psychiatric Day Treatment Program (PDTP) program also includes Partial Hospitalization Program (PHP) and and Intensive Outpatient Program (IOP).</p>
                </div>
                <div className="card">
                    <h3>Support Services</h3>
                    <p>To ensure every behavioral health need is met, we also provide other support services such as Psychiatric Rehabilitation (PRP), Health Homes and Case Management. We also offer consulting and advisory services to other healthcare organizations.</p>
                </div>
            </div>
            <a href={grievance_policy} download="Grievance Policy.pdf" onClick={() => { handleOpenPdf(cordova.file.applicationDirectory + "www/static/media/Grievance_Policy.9a57c2c73e091a70a3ac.pdf", "Grievance_Policy.pdf") }} className="btn" id="gPolicy">Grievance Policy</a>
            <a href={crr_policy} download="Client Rights and Responsibilities Policy.pdf" onClick={() => { handleOpenPdf(cordova.file.applicationDirectory + "www/static/media/Client_Rights_and_Responsibilities_Policy.867567c6ae0e9cb88b1f.pdf", "Client_Rights_and_Responsibilities_Policy.pdf") }} className="btn" id="crrPolicy">Client's Right and Responsibilities Policy</a>
        </div>
    )
}

export default Home;