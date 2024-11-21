import {Inject,ScheduleComponent,Day,Week,WorkWeek,Month,Agenda} from '@syncfusion/ej2-react-schedule';



const Scheduler=()=>{

    const data=[
        {
            Id:2,
            Subject:'Meeting',
            isAllDay:false,
            Status:"Completed",
            StartTime:new Date(2024,11,15,10,0),
            EndTime:new Date(2024,11,15,10,30),
            priority:'High'

        }

    ]
    const fieldsData={
        id:'Id',
        subject:{name:'Subject'},
        isAllDay:{name:'IsAllDay'},
        startTime:{name:'StartTime'},
        endTime:{name:"EndTime"}
    }
    const eventSettings={
        dataSource:data, fields:fieldsData    }
    
    return(
        <div className="home-bg">

            
            <ScheduleComponent currentView="Month" eventSettings={eventSettings}>
                <Inject services={[Day,Week,WorkWeek,Month,Agenda]}/>
            </ScheduleComponent>
            
        </div>
    )

}


export default Scheduler