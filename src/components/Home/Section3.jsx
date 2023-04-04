import Button from '@mui/material/Button';
const StoryCard = (props)=> {
    return (
        <div className="col-md-4 mb-4">
      <div className="card">
        <img src={props.imageUrl} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.content}</p>
        
        </div>
      </div>
    </div>
    )
}

const Section3 = ()=> {
    return (
        <div style={{ textAlign: "center" }}>
      <h1>Check out our stories</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <StoryCard imageUrl={"https://thumbs.dreamstime.com/b/indian-village-rickshaw-rider-street-transportation-indian-village-rickshaw-rider-street-transportation-travelling-156761852.jpg"}
         title = {"Villages as important as towns"} 
         content = {"While many focus on big cities we have focused on expanding our services all over Nepal. Our experience shows it is the villages and small towns that need ecommerce more."}/>
        <StoryCard imageUrl={"https://cdn.techjockey.com/blog/wp-content/uploads/2018/12/13172658/Top-10-Courier-Management-Software-in-India-2022_feature.jpg"} 
        title={"Transport is the critical factor"} 
        content={"The logistics bottleneck is because of poor and unprofessional transport infrastructure. We started owning and managing our own fleet to provide secure & timely service."}/>
        <StoryCard imageUrl={"https://media.cntraveler.com/photos/609efad86ed0f922b14c133a/16:9/w_2580,c_limit/Incredible%20Suspension%20Bridges%20Around%20the%20World_Golden%20Skybridge_Photo%20credit%20Pursuit,%20Chris%20Amat_IMG_3334-3000x2001-2c58e9a3-1ba0-40a7-b6bf-4633f3e07d26.jpg"} 
        title={"Give us the challenge we will take it"} 
        content={"We have expanded our services to Karnali and far west, often delivering on foot, human back and donkeys. It is a challenge, but we are here to provide services to Humla and Pyuthan as much as Dharan and Birtamod."}/>
      </div>
      <Button variant="contained" id='track-btn'>View More</Button>
    </div>
    )
}

export default Section3;