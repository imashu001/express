const User = require('../models/user');
module.exports.profile = function(req,res){
   return res.render('users_profile',{
       title: "Users"
});
}
module.exports.profile = function(req,user){
    if(req.cookies.user_id){
        User.findById('req.cookies.user_id',function(err,user){
            if(user){
                return res.render('users_profile',{
                    title: "User Profile",
                    user: user
                })
            }
            return res.redirect('/users/sign-in');
        })
    }else{
        return res.redirect('/users/sign-in');
    } 
    
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

 module.exports.create = function(req,res){
     if(req.body.password != req.body.confirm_password){
         return res.redirect('back');
     }
     User.findOne({email: req.body.email},function(err,user){
         if(err){console.log('Error In Finding user in Sign-up'); return}

         if(!user){
             User.create(req.body,function(err,user){
                if(err){console.log('Error In Finding user in Sign-up'); return}

                return res.redirect('/users/sign-in')
             })


         }else{
             return res.redirect('back');
         }
     })
 }
 module.exports.createSession = function(req,res){
    //  TO Do Later
    return res.redirect('/');
}