import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App(){

    return (
        <div>
            
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital Assistance</p>
                </div>
            </section>

            <div className='conctainer'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-3'>
                            <ProfileCard 
                            title="Alexa" 
                            handle="@alexa99" 
                                image={AlexaImage} 
                            description="Alexa is bla-bla-bla, was made by bla-bla-bla  fro bla-bla-bla"/>
                        </div> 
                        
                        <div className='column is-3'>
                            <ProfileCard 
                            title="Cortana" 
                            handle="@cortana32" 
                            image={CortanaImage} 
                            description="Cortana is bla-bla-bla, was made by bla-bla-bla  fro bla-bla-bla"
                            />
                        </div> 
                        
                        <div className='column is-3'>
                            <ProfileCard 
                            title="Siri" 
                            handle="@siri01" 
                            image={SiriImage} 
                            description="Siri is bla-bla-bla, was made by bla-bla-bla  fro bla-bla-bla"
                            />
                       </div> 
                    </div>
                </section>
            </div>
      </div>  
    );
}

export default App;