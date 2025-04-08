function addEventListenerToElementMobile(){
    document.addEventListener("DOMContentLoaded", function () {
        const sidebar = document.getElementById("sidebar");
        const sidebarToggle = document.querySelector(".navbar-toggler");

        if (sidebarToggle) {
            sidebarToggle.addEventListener("click", function () {
                sidebar.classList.toggle("active");
            });
        }
    });
    mobileControlsForFranchise();
    mobileControlsForRadial();
    mobileControlsForRecruitment();    
}

function mobileControlsForFranchise(){
    const controls = document.getElementById('franchiseControlsMob');
    const franchiseViewMob = document.getElementById('franchiseViewMob');
    const leftPanelMob = document.getElementById('leftPanelMob');
    const layerInfoViewMob = document.getElementById('layerInfoViewMob');
    const layerInformationBtnMob = document.getElementById('layerInformationBtnMob');
    const backToFranchiseViewBtnMob = document.getElementById('backToFranchiseViewBtnMob');
    const tableViewBtnMob = document.getElementById('tableViewBtnMob');
    const tableViewMob = document.getElementById('tableViewMob');
    const returnToMapFromTableMob = document.getElementById('returnToMapFromTableMob');

    document.getElementById('franchiseTerritoriesBtnMob').addEventListener('click', function () {
        if (controls.classList.contains('d-none')) {
            controls.classList.remove('d-none');
            controls.classList.add('d-block');
        } else {
            controls.classList.remove('d-block');
            controls.classList.add('d-none');
        }
    });
    // Hide left panel and show franchiseViewMob
    document.getElementById('menuBtnMob').addEventListener('click', function () {
        if (franchiseViewMob.classList.contains('d-none')) {
            leftPanelMob.classList.add('d-none');
            franchiseViewMob.classList.remove('d-none');
            franchiseViewMob.classList.add('d-block');
        }
    });
    // Back to Layer Control for Mobile
    document.getElementById('backToLayerControlBtnMob').addEventListener('click', function () {
        franchiseViewMob.classList.add('d-none');
        franchiseViewMob.classList.remove('d-block');
        leftPanelMob.classList.remove('d-none');
    });
    if (layerInformationBtnMob) {
        layerInformationBtnMob.addEventListener('click', function() {
            franchiseViewMob.classList.add('d-none');
            franchiseViewMob.classList.remove('d-block');
            layerInfoViewMob.classList.remove('d-none');
            layerInfoViewMob.classList.add('d-block');
            // renderPieChart();
        });
    }
    if (backToFranchiseViewBtnMob) {
        backToFranchiseViewBtnMob.addEventListener('click', function() {
            layerInfoViewMob.classList.add('d-none');
            layerInfoViewMob.classList.remove('d-block');
            franchiseViewMob.classList.remove('d-none');
            franchiseViewMob.classList.add('d-block');
        });
    }
    // if (tableViewBtnMob) {
    //     tableViewBtnMob.addEventListener("click", function() {
    //         tableViewMob.classList.add('d-block');
    //         tableViewMob.classList.remove('d-none');
    //         franchiseViewMob.classList.add('d-none');
    //         franchiseViewMob.classList.remove('d-block');
    //     });
    // }
    // if (returnToMapFromTableMob) {
    //     returnToMapFromTableMob.addEventListener("click", function() {
    //         tableViewMob.classList.add('d-none');
    //         tableViewMob.classList.remove('d-block');
    //         franchiseViewMob.classList.remove('d-none');
    //         franchiseViewMob.classList.add('d-block');

    //     });
    // }
    
}
function mobileControlsForRadial(){
    const radialviewMob = document.getElementById('radialviewMob');
    const leftPanelMob = document.getElementById('leftPanelMob');
    const addressInputRadialMob = document.getElementById('addressInputRadialMob');
    const createNewAreaBtnRadialMob = document.getElementById('createNewAreaBtnRadialMob');
    const backToRadialControlFromAutoCompleteMob = document.getElementById('backToRadialControlFromAutoCompleteMob');
    const layerInfoViewRadialMob = document.getElementById('layerInfoViewRadialMob');
    const layerInformationBtnRadialMob = document.getElementById('layerInformationBtnRadialMob');
    const backToViewBtnRadialMob = document.getElementById('backToViewBtnRadialMob');
    const tableViewBtnRadialMob = document.getElementById('tableViewBtnRadialMob');
    const tableViewRadialMob = document.getElementById('tableViewRadialMob');
    const returnToMapFromTableRadialMob = document.getElementById('returnToMapFromTableRadialMob');

    // radial analysis for mobile
   document.getElementById('RadialAnalysisBtnMob').addEventListener('click', function () {
        var controls = document.getElementById('radialControlsMob');
        if (controls.classList.contains('d-none')) {
            controls.classList.remove('d-none');
            controls.classList.add('d-block');
        } else {
            controls.classList.remove('d-block');
            controls.classList.add('d-none');
        }
    });
    // Hide left panel and show franchiseViewMob
    document.getElementById('menuBtnRadialMob').addEventListener('click', function () {
        if (radialviewMob.classList.contains('d-none')) {
            leftPanelMob.classList.add('d-none');
            radialviewMob.classList.remove('d-none');
            radialviewMob.classList.add('d-block');
        }
    });
    // Back to Layer Control for Mobile
    document.getElementById('backToLayerControlBtnFromRadialMob').addEventListener('click', function () {
        radialviewMob.classList.add('d-none');
        radialviewMob.classList.remove('d-block');
        leftPanelMob.classList.remove('d-none');
    }); 
    
    if (createNewAreaBtnRadialMob) {
        createNewAreaBtnRadialMob.addEventListener('click', function() {;
            radialviewMob.classList.add('d-none');
            radialviewMob.classList.remove('d-block');
            addressInputRadialMob.classList.add('d-block');
            addressInputRadialMob.classList.remove('d-none');
        });
    }
    if (backToRadialControlFromAutoCompleteMob) {
        backToRadialControlFromAutoCompleteMob.addEventListener('click', function() {
            addressInputRadialMob.classList.remove('d-block');
            addressInputRadialMob.classList.add('d-none');
            radialviewMob.classList.remove('d-none');
            radialviewMob.classList.add('d-block');
        })
    }
    if (layerInformationBtnRadialMob) {
        layerInformationBtnRadialMob.addEventListener('click', function() {
            radialviewMob.classList.add('d-none');
            radialviewMob.classList.remove('d-block');
            layerInfoViewRadialMob.classList.remove('d-none');
            layerInfoViewRadialMob.classList.add('d-block');
            // renderPieChart();
        });
    }
    if (backToViewBtnRadialMob) {
        backToViewBtnRadialMob.addEventListener('click', function() {
            layerInfoViewRadialMob.classList.add('d-none');
            layerInfoViewRadialMob.classList.remove('d-block');
            radialviewMob.classList.remove('d-none');
            radialviewMob.classList.add('d-block');
        });
    }
    // if (tableViewBtnRadialMob) {
    //     tableViewBtnRadialMob.addEventListener("click", function() {
    //         tableViewRadialMob.classList.add('d-block');
    //         tableViewRadialMob.classList.remove('d-none');
    //         franchiseViewMob.classList.add('d-none');
    //         franchiseViewMob.classList.remove('d-block');
    //     });
    // }
    // if (returnToMapFromTableRadialMob) {
    //     returnToMapFromTableRadialMob.addEventListener("click", function() {
    //         tableViewRadialMob.classList.add('d-none');
    //         tableViewRadialMob.classList.remove('d-block');
    //         radialviewMob.classList.remove('d-none');
    //         radialviewMob.classList.add('d-block');

    //     });
    // }
}
function mobileControlsForRecruitment(){
    const controls = document.getElementById('recruitmentControlsMob');
    const recruitmentViewMob = document.getElementById('recruitmentViewMob');
    const leftPanelMob = document.getElementById('leftPanelMob');
    const layerInfoViewRecruitmentMob = document.getElementById('layerInfoViewRecruitmentMob');
    const layerInformationBtnRecruitmentMob = document.getElementById('layerInformationBtnRecruitmentMob');
    const backToViewBtnRecruitmentMob = document.getElementById('backToViewBtnRecruitmentMob');
    const tableViewBtnRecruitmentMob = document.getElementById('tableViewBtnRecruitmentMob');
    const tableViewRecruitmentMob = document.getElementById('tableViewRecruitmentMob');
    const returnToMapFromTableRecruitmentMob = document.getElementById('returnToMapFromTableRecruitmentMob');
    
    document.getElementById('recruitmentTerritoriesBtnMob').addEventListener('click', function () {
        if (controls.classList.contains('d-none')) {
            controls.classList.remove('d-none');
            controls.classList.add('d-block');
        } else {
            controls.classList.remove('d-block');
            controls.classList.add('d-none');
        }
    });
    document.getElementById('menuBtnrecruitmentMob').addEventListener('click', function () {
        if (recruitmentViewMob.classList.contains('d-none')) {
            leftPanelMob.classList.add('d-none');
            recruitmentViewMob.classList.remove('d-none');
            recruitmentViewMob.classList.add('d-block');
        }
    });
    // Back to Layer Control for Mobile
    document.getElementById('backToLayerControlBtnRecruitmentMob').addEventListener('click', function () {
        recruitmentViewMob.classList.add('d-none');
        recruitmentViewMob.classList.remove('d-block');
        leftPanelMob.classList.remove('d-none');
    }); 
    if (layerInformationBtnRecruitmentMob) {
        layerInformationBtnRecruitmentMob.addEventListener('click', function() {
            recruitmentViewMob.classList.add('d-none');
            recruitmentViewMob.classList.remove('d-block');
            layerInfoViewRecruitmentMob.classList.remove('d-none');
            layerInfoViewRecruitmentMob.classList.add('d-block');
            // renderPieChart();
        });
    }
    if (backToViewBtnRecruitmentMob) {
        backToViewBtnRecruitmentMob.addEventListener('click', function() {
            layerInfoViewRecruitmentMob.classList.add('d-none');
            layerInfoViewRecruitmentMob.classList.remove('d-block');
            recruitmentViewMob.classList.remove('d-none');
            recruitmentViewMob.classList.add('d-block');
        });
    }
    // if (tableViewBtnRecruitmentMob) {
    //     tableViewBtnRecruitmentMob.addEventListener("click", function() {
    //         tableViewRecruitmentMob.classList.add('d-block');
    //         tableViewRecruitmentMob.classList.remove('d-none');
    //         recruitmentViewMob.classList.add('d-none');
    //         recruitmentViewMob.classList.remove('d-block');
    //     });
    // }
    // if (returnToMapFromTableRecruitmentMob) {
    //     returnToMapFromTableRecruitmentMob.addEventListener("click", function() {
    //         tableViewRecruitmentMob.classList.add('d-none');
    //         tableViewRecruitmentMob.classList.remove('d-block');
    //         recruitmentViewMob.classList.remove('d-none');
    //         recruitmentViewMob.classList.add('d-block');

    //     });
    // }
}

function addEventListenerToElementDesktop(){
    DesktopControlsForFranchise();
    DesktopControlsForRadial();
    DesktopControlsForRecruitment();
}

function DesktopControlsForFranchise(){
    const controls = document.getElementById('franchiseControls');
    const franchiseView = document.getElementById('franchiseView');
    const leftPanel = document.getElementById('defaultView');
    const layerInfoView = document.getElementById('layerInfoViewFranchise');
    const layerInformationBtn = document.getElementById('layerInformationBtn');
    const backToFranchiseViewBtn = document.getElementById('backToFranchiseViewBtn');
    const tableViewBtn = document.getElementById('tableViewBtn');
    const tableView = document.getElementById('tableView');
    const returnToMapFromTable = document.getElementById('returnToMapFromTable');
    const map = document.getElementById("map-container");

    document.getElementById('franchiseTerritoriesBtn').addEventListener('click', function () {
        controls.classList.toggle('d-none');
        controls.classList.toggle('d-block');
    });
    document.getElementById('menuBtn').addEventListener('click', function () {
        controls.classList.remove('d-block');
        controls.classList.add('d-none');
        if (franchiseView.classList.contains('d-none')) {
            leftPanel.style.display = 'none';
            franchiseView.classList.remove('d-none');
            franchiseView.classList.add('d-block');
        }
    });
    // Back to Layer Control
    document.getElementById('backToLayerControlBtn').addEventListener('click', function () {
        franchiseView.classList.add('d-none');
        franchiseView.classList.remove('d-block');
        leftPanel.style.display = 'block';
    });
    if (layerInformationBtn) {
        layerInformationBtn.addEventListener('click', function() {
            franchiseView.classList.add('d-none');
            franchiseView.classList.remove('d-block');
            layerInfoView.classList.remove('d-none');
            layerInfoView.classList.add('d-block');
            // renderPieChart();
        });
    }
    if (backToFranchiseViewBtn) {
        backToFranchiseViewBtn.addEventListener('click', function() {
            layerInfoView.classList.add('d-none');
            layerInfoView.classList.remove('d-block');
            franchiseView.classList.remove('d-none');
            franchiseView.classList.add('d-block');
        });
    }
    // if (tableViewBtn) {
    //     tableViewBtn.addEventListener("click", function() {
    //         tableView.classList.add('d-block');
    //         tableView.classList.remove('d-none');
    //         map.classList.add('d-none');
    //         map.classList.remove('d-block');
    //     });
    // }
    // if (returnToMapFromTable) {
    //     returnToMapFromTable.addEventListener("click", function() {
    //         tableView.classList.add('d-none');
    //         tableView.classList.remove('d-block');
    //         map.classList.add('d-block');
    //         map.classList.remove('d-none');

    //     });
    // }
}

function DesktopControlsForRadial(){
    const controls = document.getElementById('radialControls');
    const radialview = document.getElementById('radialview');
    const leftPanel = document.getElementById('defaultView');
    const addressInputRadial = document.getElementById('addressInputRadial');
    const createNewAreaBtnRadial = document.getElementById('createNewAreaBtnRadial');
    const backToRadialControlFromAutoComplete = document.getElementById('backToRadialControlFromAutoComplete');
    const layerInfoViewRadial = document.getElementById('layerInfoViewRadial');
    const layerInformationBtnRadial = document.getElementById('layerInformationBtnRadial');
    const backToRadialViewBtn = document.getElementById('backToViewBtnRadial'); 
   document.getElementById('RadialAnalysisBtn').addEventListener('click', function () {
        controls.classList.toggle('d-none');
        controls.classList.toggle('d-block');
    });
    document.getElementById('menuBtnRadial').addEventListener('click', function () {
        controls.classList.remove('d-block');
        controls.classList.add('d-none');
        // Hide left panel and show radialview
        if (radialview.classList.contains('d-none')) {
            leftPanel.style.display = 'none';
            radialview.classList.remove('d-none');
            radialview.classList.add('d-block');
        }
    });
    // Back to Layer Control
    document.getElementById('backToLayerControlBtnFromRadial').addEventListener('click', function () {
        radialview.classList.add('d-none');
        radialview.classList.remove('d-block');
        leftPanel.style.display = 'block';
    });
    if (createNewAreaBtnRadial) {
        createNewAreaBtnRadial.addEventListener('click', function() {;
            radialview.classList.add('d-none');
            radialview.classList.remove('d-block');
            addressInputRadial.classList.add('d-block');
            addressInputRadial.classList.remove('d-none');
        });
    }
    if (backToRadialControlFromAutoComplete) {
        backToRadialControlFromAutoComplete.addEventListener('click', function() {
            addressInputRadial.classList.remove('d-block');
            addressInputRadial.classList.add('d-none');
            radialview.classList.remove('d-none');
            radialview.classList.add('d-block');
        })
    }
    // if (layerInformationBtnRadial) {
    //     layerInformationBtnRadial.addEventListener('click', function() {
    //         radialview.classList.add('d-none');
    //         radialview.classList.remove('d-block');
    //         layerInfoViewRadial.classList.remove('d-none');
    //         layerInfoViewRadial.classList.add('d-block');
    //         // renderPieChartRadial();
    //     });
    // }
    // if (backToRadialViewBtn) {
    //     backToRadialViewBtn.addEventListener('click', function() {
    //         layerInfoViewRadial.classList.add('d-none');
    //         layerInfoViewRadial.classList.remove('d-block');
    //         // demographicTableRadial.style.display = "block";
    //         radialview.classList.remove('d-none');
    //         radialview.classList.add('d-block');
    //     });
    // }
}

function DesktopControlsForRecruitment(){
    const controlsDesktop = document.getElementById('recruitmentControls');
    const recruitmentView = document.getElementById('recruitmentView');
    const leftPanel = document.getElementById('defaultView');
    const backToLayerControlBtnRecruitment = document.getElementById('backToLayerControlBtnRecruitment');
    const layerInfoViewRecruitment = document.getElementById('layerInfoViewRecruitment');
    const layerInformationBtnRecruitment = document.getElementById('layerInformationBtnRecruitment');
    const backToViewBtnRecruitment = document.getElementById('backToViewBtnRecruitment');
    document.getElementById('recruitmentTerritoriesBtn').addEventListener('click', function () {
        controlsDesktop.classList.toggle('d-none');
        controlsDesktop.classList.toggle('d-block');
    });
    document.getElementById('menuBtnrecruitment').addEventListener('click', function () {
        controlsDesktop.classList.remove('d-block');
        controlsDesktop.classList.add('d-none');
        // Hide left panel and show recruitmentView
        if (recruitmentView.classList.contains('d-none')) {
            leftPanel.style.display = 'none';
            recruitmentView.classList.remove('d-none');
            recruitmentView.classList.add('d-block');
        }
    });
    // Back to Layer Control
    if (backToLayerControlBtnRecruitment){
        backToLayerControlBtnRecruitment.addEventListener('click', function () {
            recruitmentView.classList.add('d-none');
            recruitmentView.classList.remove('d-block');
            leftPanel.style.display = 'block';
        });
    }
    if (layerInformationBtnRecruitment) {
        layerInformationBtnRecruitment.addEventListener('click', function() {
            recruitmentView.classList.add('d-none');
            recruitmentView.classList.remove('d-block');
            layerInfoViewRecruitment.classList.remove('d-none');
            layerInfoViewRecruitment.classList.add('d-block');
            // renderPieChartRecruitment();
        });
    }
    if (backToViewBtnRecruitment) {
        backToViewBtnRecruitment.addEventListener('click', function() {
            layerInfoViewRecruitment.classList.add('d-none');
            layerInfoViewRecruitment.classList.remove('d-block');
            recruitmentView.classList.remove('d-none');
            recruitmentView.classList.add('d-block');
        });
    }
}
// Initialize Google Maps
function initMap() {
    var map = new google.maps.Map(document.getElementById('map-container'), {
        center: { lat: 39.0928, lng: -95.8143 }, // United States Center
        zoom: 5
    });
    addEventListenerToElementMobile();
    addEventListenerToElementDesktop();
}

window.onload = initMap;