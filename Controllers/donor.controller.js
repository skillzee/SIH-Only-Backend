const {Donor} = require("../Models/donor.model.js")
const { ApiError } = require("../utils/apiError")
const bcrypt = require("bcrypt")




const register = async(req,res) =>{
    try {
        const {name, email, password, state, country, city, phoneNumber, bloodGroup} = req.body;
        

        const existedDonor = await Donor.findOne(
            {
                $or:[
                    {email},
                    {phoneNumber}
                ]
            }
        )

        if(existedDonor){
            throw new ApiError(400, "User with same email or phoneNumber already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        

        const donor = await Donor.create({
            name,
            email,
            password: hashedPassword,
            state,
            country,
            city,
            phoneNumber,
            bloodGroup
        })

        return res.status(200).json({
            data: donor,
            message: "Donor Registerd Successfully"
        })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}


module.exports = {register}