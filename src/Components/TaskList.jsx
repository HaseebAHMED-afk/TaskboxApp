import React from 'react'

import Task from './Task'

import PropTypes from 'prop-types'


const TaskList = ({loading , tasks , onPinTask , onArchiveTasks}) => {

    const events = {
        onPinTask , 
        onArchiveTasks
    }

    const LoadingRow = (
        <div className="loading-item" >
            <span className='glow-checkbox' />
            <span className='glow-text' >
                <span>Loading</span> <span>cool</span> <span>state</span>
            </span>

        </div>
    )

    if(loading){
        return (
        <div className='list-items' >
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
        </div>
        );
    }

    if(tasks.length === 0){
        return <div className='list-items' >
            <div className='wrapper-message' >
                <span  className='icon-check' />
                <div className='title-message' >You have no tasks.</div>
                <div className='subtitle-message' >Sit back and relax.</div>
            </div>
        </div>
    }

    const taskInOrder = [
        ...tasks.filter(t => t.state === 'TASK_PINNED'),
        ...tasks.filter(t => t.state !=='TASK_PINNED' )
    ]

    return (
        <div className='list-items' >  
            {
                taskInOrder.map((task) => (
                    <Task key={task.id} task={task} {...events} /> 
                ))
            }
        </div>
    )
}

TaskList.propTypes = {
    loading : PropTypes.bool,
    tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
    onPinTask : PropTypes.func,
    onArchiveTasks: PropTypes.func
}

TaskList.defaultProps = {
    loading: false
}

export default TaskList
