


function Skeleton({ times }) {
    return (
        <div  className="mx-96 mt-10">
            {Array.from({ length: times }).map((_, index) => {
                return (<div key={index} role="status">
                    <div class="h-14 bg-gray-200 rounded-md dark:bg-gray-700 w-2/3 mb-4"></div   >
                </div>
                )
            })
            }
        </div>
    )
}

export default Skeleton