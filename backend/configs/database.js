



function connectDB()
{
    con.connect(function(err)
{
    if(err) throw err;
    console.log("Connected!");
});
}

module.exports = connectDB;