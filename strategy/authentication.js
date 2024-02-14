const passport=require('passport')
const strategy=require('passport-local')
const database=require('../mongodb/documentation.js')
//hashing
const {comparePassword}=require('../hashing/hash.js')
passport.use(new strategy(async (username,password,done)=>{
        try{
            const findUser=await database.findOne({username})
            if(!findUser) throw new Error('User NOT FOUND')
            if(!comparePassword(password,findUser.password)) throw new Error("Invalid password! TRY AGAIN")
            console.log('User authenticated')
            done(null,findUser)
        }catch(err){
            console.log(err)
            done(err,null)
        }
}))
passport.serializeUser((user,done)=>{
     console.log("Inside of serialization:")
     console.log(user)
     done(null,user.id)
})
passport.deserializeUser((id,done)=>{
    try{
        const findUser=database.findById(id)
        if(!findUser) throw new Error("Username not Found")
            console.log(findUser)
        done(null,findUser)
    }catch(err){
        done(err,null)
    }
})
module.exports=passport