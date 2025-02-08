import unslah from './unslah.jpg';
function Mycomponent(){
    return (
        <div className='mycomponent'>
            <h1>My component</h1>
            <p className='list'>List of fruits</p>
            <ol>
               <li> <a href="">Apple</a></li> 
              <li><a href="">Banana</a></li> 
             <li> <a href="">Orange</a></li>
               
            </ol>
            <hr></hr>
    <div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum dolores voluptatem quo quisquam quia error odio pariatur alias explicabo. Quia debitis dolore voluptatem quaerat! Molestias praesentium recusandae tenetur sit neque.
            {/* <img src={unslah} alt="unslah" srcset="" height={300} width={300}/> */}

        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus dolorem molestiae omnis voluptate nobis quibusdam ea placeat rem quae iste, et quisquam officia tenetur nihil ad magnam. Hic, doloribus atque.
        </p>
        <img src="https://media.istockphoto.com/id/1127245421/photo/woman-hands-praying-for-blessing-from-god-on-sunset-background.jpg?s=1024x1024&w=is&k=20&c=faoiFapQkhucuLuor9gBnblJ4KJpqvEgariqalvzRas=" alt="" srcset="" height={400} width={400} />
        {/* <img src={unslah} alt="unslah" srcset="" height={300} width={300}/> */}
    </div>
        </div>
    
        
    )
}
export default Mycomponent;