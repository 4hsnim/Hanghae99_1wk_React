import React,{useState} from "react";
import { useHistory, useParams } from "react-router-dom";
const Review = (props) => {
    const history = useHistory()
    const params = useParams()
    const [rate,setrate] = React.useState(0)

    return (<>
        <div className="wrap" style={{
            width: "350px",
            height: "90vh",
            margin: "50px auto",
            border: "2px solid black",
            borderRadius: "3px",
        }}>
            <h3 style={{
                textAlign: "center",
                marginTop: "60px",
            }}>
                <span style={{
                    color: "#fff",
                    backgroundColor: "orange",

                }}>

                    {params.week_day}요일
                </span>
                {" "}평점 남기기
            </h3>
            <div style={{
                display:"flex",
                justifyContent:"center",
                alignContent:"center",
            }}>
                {Array.from({ length: 5 }, (item, index) => {
                return (
                    <div
                        style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "30px",
                            backgroundColor: rate < index +1 ? "#ddd" : "#ffeb3b",
                            margin: "10px",
                        }}
                        onClick={()=>{
                            setrate(index +1 )
                        }}
                        >

                    </div>
                )
            })}
            </div>

            <div style={{
                width:"300px",
                height: "40px",
                backgroundColor:"purple",
                margin:"20px auto",
                color:"white",
                display:"flex",
                justifyContent:"center",
                alignContent:"center",
                paddingTop:"20px",
                borderRadius:"5px"
                
            }}
            onClick={()=> {
                history.goBack()
            }}
            >
                평점 남기기
            </div>
            




        </div>
    </>

    )

}

export default Review