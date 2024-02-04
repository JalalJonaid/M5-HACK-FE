import React from 'react';

const DirectionsCard = ({response}) => {
    // console.log(response)

    const instruction = (step) => {



        return (
            <>
                <div dangerouslySetInnerHTML={{ __html: step.instructions }} />
                {/* {step.instructions}

                <div>
                {`Travel ${step.distance.text} then `}
                </div> */}
            </>
        )
    }

    const createWarning = (warning) => {
        return (
            <div>
                {warning}
            </div>
        )
    }


    return (
        <div>
            {response.warnings ? response.warnings.map((warning) => {
                return createWarning(warning)
            }) : null}
            {/* {console.log(response.legs[0].steps)} */}
            {response.legs[0].steps ? response.legs[0].steps.map((directions) => {
                return(instruction(directions))
            }): null}
        </div>
    );
}

export default DirectionsCard;
