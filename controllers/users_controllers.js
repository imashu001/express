module.exports.profile = function(req,res){
   return res.render('users_profile',{
       title: "Users"
});
}

module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title: "Codeal | Sign-Up"
 });
 }

 module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title: "Codeal | Sign-In"
 });
 }