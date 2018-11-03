var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var cmsSchema = new Schema ({
    h1: String,
    h2: String,
    pris: String,
    text: String,
    h1_sub: String,
    h2_1: String,
    h2_2: String,
    h1_3: String,
    h2_1_text: String,
    h2_2_text: String,
    h1_3_text: String,
    button: String,
    button_bottom: String,
    tid: String,
    bra_att_veta: String,
    city: String,
    category: String,
    top_button_show: String,
    top_button: String,
    h2_3: String,
    h2_3_text: String,

    varfor: String,
    darfor: String,


    name: String,
    email: String,
    message: String,
    password: String,
    password2: String,
    tack: String,

    emailexists: String,
    emailinvalid: String,
    empty: String,

    price_in_form: String,
    button_in_form: String,
    h1_form: String,

    sokning_h1: String,
    sokning_text: String,
    sokning_button: String,
    resultat: String,
    resultat_h1: String,
    resultat_text: String,
    resultat_button: String,
    nollrisk_h1: String,
    nollrisk_text: String,
    nollrisk_button: String,
    hur_h1: String,
    hur_text: String,
    hur_h2_1: String,
    hur_h2_1_text: String,
    hur_h2_2: String,
    hur_h2_2_text: String,
    funkar_h1: String,
    funkar_text: String,
    funkar_h2_1: String,
    funkar_h2_1_text: String,
    funkar_h2_2: String,
    funkar_h2_2_text: String,
    funkar_h2_3: String,
    funkar_h2_3_text: String,
    review_h1: String,
    review_1_text: String,
    review_1_name: String,
    review_1_job: String,
    review_2_text: String,
    review_2_name: String,
    review_2_job: String,
    review_3_text: String,
    review_3_name: String,
    review_3_job: String,
    footer_h1: String,
    footer_text: String,
    footer_button: String,

    f1_h1: String,
    f2_h1: String,
    f3_h1: String,
    f4_h1: String,
    f5_h1: String,
    f6_h1: String,

    info: String,

    f1_text: String,
    f2_text: String,
    f3_text: String,
    f4_text: String,
    f5_text: String,
    f6_text: String

});

var CMS = mongoose.model('cms', cmsSchema);

module.exports = CMS;
