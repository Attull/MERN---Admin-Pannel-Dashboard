
const authUser = async (req, res) =>{
    await res.status(200).json({message:"Auth user"})
}

export {authUser}