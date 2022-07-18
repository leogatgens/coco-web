import { combineReducers } from "redux";

const reviewsReducers = () => {
    return [
        { 
            "review": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor.",
            "useravatar": "/sbin/cutting_edge_manager_senior.vss.cgm",
            "username": "Ricky",
            "rating": 0,
            "date": "2022-05-13"
        },
        {
            "review": "Alyssa Senger",
            "useravatar": "/dev/connect_initiatives_samoa.psb.wmls",
            "username": "Nadine",
            "rating": 1,
            "date": "2022-04-18"
        },
        {
            "review": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor",
            "useravatar": "/usr/libexec/assurance.jsonml.sisx",
            "username": "Erick",
            "rating": 2,
            "date": "2021-07-26"
        },
        {
            "review": "Dwight Goodwin",
            "useravatar": "/opt/include/international_crest_local.pskcxml.mods",
            "username": "Fernando",
            "rating": 3,
            "date": "2022-05-15"
        },
        {
            "review": "Amos Nienow",
            "useravatar": "/opt/share/computer_rhode_generic.wpd.wmlsc",
            "username": "Jennifer",
            "rating": 4,
            "date": "2021-06-07"
        },
        {
            "review": "Bernice Bins",
            "useravatar": "/boot/enable_convergence_market.pptx.itp",
            "username": "Thomas",
            "rating": 5,
            "date": "2021-07-17"
        },
        {
            "review": "Harold Runolfsdottir",
            "useravatar": "/usr/include/kip_savings.scss.ink",
            "username": "Terri",
            "rating": 6,
            "date": "2022-04-26"
        },
        {
            "review": "Alyssa Herman",
            "useravatar": "/usr/src/initiative_account_scsi.msp.gram",
            "username": "Morris",
            "rating": 7,
            "date": "2021-12-06"
        },
        {
            "review": "Theresa Vandervort",
            "useravatar": "/sys/lime_paradigms_quantify.odft.evy",
            "username": "Jeffery",
            "rating": 8,
            "date": "2021-11-09"
        },
        {
            "review": "Marion Olson",
            "useravatar": "/home/user/kentucky_district.odc.z3",
            "username": "Katie",
            "rating": 9,
            "date": "2021-12-20"
        },
        {
            "review": "Caleb White",
            "useravatar": "/System/info_mediaries.uvvp.mscml",
            "username": "May",
            "rating": 10,
            "date": "2022-01-15"
        },
        {
            "review": "Elmer Mann",
            "useravatar": "/usr/local/bin/adaptive_future_protocol.cdxml.sdw",
            "username": "Clifford",
            "rating": 11,
            "date": "2022-03-22"
        },
        {
            "review": "Warren Collier",
            "useravatar": "/var/mail/product_research_senior.csv.csml",
            "username": "Amelia",
            "rating": 12,
            "date": "2021-09-26"
        },
        {
            "review": "Cody Vandervort",
            "useravatar": "/Library/plastic_end_to_end.str.swa",
            "username": "Ruby",
            "rating": 13,
            "date": "2021-11-08"
        },
        {
            "review": "Jacquelyn Cronin",
            "useravatar": "/net/steel_infrastructures.listafp.dd2",
            "username": "Penny",
            "rating": 14,
            "date": "2021-07-21"
        },
        {
            "review": "Guadalupe Feil",
            "useravatar": "/home/corporate_licensed_personal.scm.less",
            "username": "Priscilla",
            "rating": 15,
            "date": "2021-10-16"
        },
        {
            "review": "Eva McClure",
            "useravatar": "/sbin/technologies_index_tan.qxt.sil",
            "username": "Bessie",
            "rating": 16,
            "date": "2021-11-25"
        },
        {
            "review": "Jermaine Ernser",
            "useravatar": "/home/user/dir/orchestrator_port_research.cst.dd2",
            "username": "Velma",
            "rating": 17,
            "date": "2021-06-11"
        },
        {
            "review": "Johnny Crona",
            "useravatar": "/home/user/dir/soft_sql.csh.mpc",
            "username": "Shawna",
            "rating": 18,
            "date": "2021-06-12"
        },
        {
            "review": "Sherri Collier",
            "useravatar": "/usr/share/b2b_roads_granite.skd.webapp",
            "username": "Martha",
            "rating": 19,
            "date": "2021-07-26"
        },
        {
            "review": "Andres Homenick",
            "useravatar": "/var/yp/massachusetts_soft_payment.ief.gex",
            "username": "Wilma",
            "rating": 20,
            "date": "2022-01-05"
        },
        {
            "review": "Norma Metz",
            "useravatar": "/System/home_metrics_protocol.clkx.stw",
            "username": "Ollie",
            "rating": 21,
            "date": "2021-10-23"
        },
        {
            "review": "Emma Sauer",
            "useravatar": "/usr/obj/1080p.png.dgc",
            "username": "Tamara",
            "rating": 22,
            "date": "2021-09-25"
        },
        {
            "review": "Elijah Keebler",
            "useravatar": "/var/yp/granite.ppd.dpg",
            "username": "Clayton",
            "rating": 23,
            "date": "2021-08-29"
        }
    ];

};

const selectedHotelReducer = (selectedHotel=null,action) =>{
    if (action.type === "HOTEL_SELECTED"){
        return action.payload;
    }
    return selectedHotel;
};



export default combineReducers({
    reviews : reviewsReducers,
    selectedHotelReducer : selectedHotelReducer

});