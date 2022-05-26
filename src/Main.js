import React, { useState } from "react";
import { useHistory } from "react-router-dom"
const Main = (props) => {
    const day_list = ["일", "월", "화", "수", "목", "금", "토"]
    const history = useHistory()
    let rate_sum = 0
    const week_rates = day_list.map((d, index) => {
        const random =
            Math.floor(Math.random() * 5) + 1
        rate_sum += random

        return {
            day: d,
            rate: random
        }
    })
    console.log(week_rates)
    let avg_rates = (rate_sum / 7).toFixed(1)
    const [avg, setavg] = useState(avg_rates)

    return (
        <>
            <div className="wrap" style={{
                width: "350px",
                height: "90vh",
                margin: "50px auto",
                border: "2px solid black",
                borderRadius: "3px",
            }}>
                <h3 style={{
                    textAlign: "center",
                    marginTop: "70px",
                }}>
                    내 일주일은?
                </h3>
                {week_rates.map((day, index) => {
                    return (
                        
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignContent: "center",
                        }}>
                            <p>{day.day}</p>
                            {Array.from({ length: 5 }, (item, index) => {
                                return (
                                    <div
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                            borderRadius: "30px",
                                            backgroundColor: day.rate < index ? "#ddd" : "#ffeb3b",
                                            margin: "10px",
                                        }}>

                                    </div>
                                )
                            })}
                            {Array.from({ length: 1 }, (item, index) => {
                                return (
                                    
                                    <div style={{
                                        width: "0",
                                        height: "0",
                                        borderBottom: "17px solid transparent",
                                        borderTop: "17px solid transparent",
                                        borderLeft: "17px solid skyblue",
                                        borderRight: "17px solid transparent",
                                        margin: "10px",

                                    }}

                                        onClick={() => {
                                            history.push(`/review/${day.day}`)
                                        }}
                                    >

                                    </div>
                                )
                            })}




                        </div>


                    )
                })}
                <div style={{
                    textAlign: "center",
                    color: "blue",
                    fontWeight: "bold",
                    fontSize: "30px",
                    marginTop: "20px",
                }}>
                    평균 평점
                    <br></br>{avg}

                    <div style={{
                        width: "100px",
                        height: "50px",
                        backgroundColor: "dodgerblue",
                        margin: "20px auto",
                        textAlign: "center",
                        alignitems: "center",
                        borderRadius: "10px",
                    }}
                        onClick={() => {
                            setavg(parseInt(0).toFixed(1))
                        }}
                    >
                        <p style={{
                            paddingTop: "10px",
                            color: "white",
                            fontSize: "20px",
                        }}>Reset</p>
                    </div>
                </div>
            </div>
        </>
    )
}




export default Main