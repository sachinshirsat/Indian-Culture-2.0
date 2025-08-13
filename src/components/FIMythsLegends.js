import React, { useEffect } from 'react';
// import './FIMythsLegends.css';
import { Container, Row, Col } from 'react-bootstrap';

import FIMythsBan from '../image/FIMythsBan.png';
import FIMythsimg1 from '../image/fimythsimg1.png';
import FIMythsimg2 from '../image/fimythsimg2.png';
import FIMythsimg3 from '../image/fimythsimg3.png';
import FIMythsimg4 from '../image/fimythsimg4.png';

import 'bootstrap/dist/css/bootstrap.min.css';

function FIMythsLegends() {

    return (
        <>
            <div className='fimythsleg-parent-container'>
                <img src={FIMythsBan} className='fimythsleg-banner' alt='Free Banner' />
            </div>
            <Container className='fimythsleg-header'>
                <Row >
                    <Col >
                        <h1>myths & legends</h1>
                        {/* <SwrilDivider /> */}
                    </Col>
                </Row>
            </Container>
            <Container className='fimythsleg-wrapper'>
                <div className="fimythsleg-text">
                    <h2>Birth of Buddha</h2>
                    <p>The story of the birth of the Buddha can be found in the earliest Buddhist canonical texts like the Sutta Pitaka, which is believed to have been orally recited during the First Buddhist Council (5th century BCE) and written down during the Fourth Buddhist Council (1st century BCE). Other works like the Mahavastu (2nd century BCE), the Lalitavistara (3rd century CE), and the Buddhacharita (1st - 2nd century CE) also refer to this event. According to these sources, the Buddha was born as Siddhartha Gautama, the son of a man named Suddhodana and his wife Maya. Suddhodana was a king of the Shakya clan whose capital was Kapilavastu.</p>

                    <p>Buddhist legends indicate that when Maya conceived her child, she dreamed of a white elephant with six tusks gently piercing her from the side. This was interpreted to mean that she would give birth either to a great ruler or a buddha (a supremely enlightened teacher). On a full moon night in Vaisakha, the queen was travelling to her parents’ home in Devdaha when she stopped at a grove in Lumbini and gave birth to a child. The child immediately took seven steps forward and a lotus bloomed at each step. He then declared in a noble voice that he was the chief of the world and this was his last rebirth. The ritual of bathing the image of the baby Buddha on Buddha Purnima is intended to commemorate this moment.</p>
                </div>

                <div className="fimythsleg-slider">
                    <div className="fimythsleg-slider-wrapper" id="slider-wrapper">
                        <img src={FIMythsimg1} alt="Kheer 1" />

                    </div>
                </div>
            </Container>
            {/*  */}
            <Container className='fimythsleg-wrapper'>
                <div className="fimythsleg-slider">
                    <div className="fimythsleg-slider-wrapper" id="slider-wrapper">
                        <img src={FIMythsimg2} alt="Kheer 1" />

                    </div>
                </div>

                <div className="fimythsleg-text">
                    <h2>Enlightenment</h2>
                    <p>One of the earliest mentions of the Buddha's spiritual quest can be found in the Ariyapariyesanā-sutta of the Sutta Pitaka. According to this text, the young Siddharatha led a sheltered life, shielded from the bitter realities of the world. However, when he was around 29 years of age, he ventured outside the royal palace one day and encountered various forms of suffering like old age, sickness, and death. Disturbed by these sights, he renounced his life as a prince and embarked on a spiritual journey.</p>

                    <p>Initially, he became a student of various ascetics and began to lead a life of extreme austerity. He tortured and starved himself until his ribs stuck out but could not find enlightenment. He then realised that he needed a healthy body if he wanted his mind to concentrate. The path to awakening was the Middle Way, between the extreme self-denial he had tried to practise and the extreme indulgence he had grown up with.</p>

                    <p>He reached the state of Nirvana (enlightenment) while meditating under a fig tree in Bodh Gaya, Bihar. He acquired knowledge of his past life, understood the laws of karma, and was released from all worldly attachments. Thereafter, he became known as the Buddha (‘the awakened one’). The fig tree began to be known as the Bodhi Tree (‘tree of awakening’).</p>

                    <p>A different narrative can be found in the Lotus Sutra (Saddharmapundarika-sutra). Believed to have been written down between 100 BCE and 200 CE, this influential Mahayana text states that the Buddha had already reached enlightenment aeons ago. Because his life span could not be comprehended by ordinary people, he resorted to the Upaya (skillful method) of pretending to renounce his life as a prince, practising austerity and then achieving enlightenment through the Middle Way.</p>
                </div>


            </Container>
            {/*  */}

            <Container className='fimythsleg-wrapper'>
                <div className="fimythsleg-text">
                    <h2>mara’s attack</h2>
                    <p>While Siddhartha Gautama was meditating to achieve  enlightenment, he was attacked by a demon named Mara. Mara’s attack is  mentioned in a number of texts, including the Mara-Samyutta section of Sutta Pitaka’s Samyutta Nikaya ("Grouped Discourses") and the Buddhacharita.  These texts recount how Mara, the lord of death and sensual pleasure,  was determined to dissuade all mortals from the righteous path. His army  included Lust, Aversion, Hunger and Thirst, Craving, Sloth and Torpor,  Cowardice, Doubt, Hypocrisy and Stupidity, False Glory, and Conceit.</p>

                    <p>Mara first sent his beautiful daughters to seduce Gautama  and disrupt his meditation. However, the young man paid them no heed.  Mara then summoned all his forces to surround Gautama in their most  frightening forms. He himself arrived on his mountain-like elephant  Girimekhala while holding weapons in his thousand arms. The devas (celestial beings), the nagas  (divine half-serpent, half-human creatures) and others who had gathered  around Gautama fled in terror at this sight. However, Gautama was  unmoved and continued his mediation.</p>

                    <p>Mara and his army then proceeded to attack Gautama with various supernatural powers and weapons, including the deadly chakkavudha (disc). The ten paramitas (‘perfections’) appeared at this point and defeated Mara’s army. The paramitas  included Generosity, Virtue, Renunciation, Wisdom, Diligence, Patience,  Honesty, Determination, Goodwill, and Serenity. Gautama continued to  meditate and each weapon transformed into flowers when it reached him.</p>
                    <p>Finally, Mara declared that only a divine being like himself could  claim the seat of enlightenment, not an ordinary human like Gautama. As  proof, he asked for witnesses and his soldiers shouted in his favour.  Gautama had no one to speak on his behalf so he gently touched the  earth. The earth roared in response and stood as his witness. Mara was  thus defeated and forced to flee. The devas then besieged him and celebrated Gautama’s victory.</p>
                </div>

                <div className="fimythsleg-slider">
                    <div className="fimythsleg-slider-wrapper" id="slider-wrapper">
                        <img src={FIMythsimg3} alt="Kheer 1" />

                    </div>
                </div>
            </Container >
            {/*  */}
            <Container Container className='fimythsleg-wrapper' >
                <div className="fimythsleg-slider">
                    <div className="fimythsleg-slider-wrapper" id="slider-wrapper">
                        <img src={FIMythsimg4} alt="Kheer 1" />

                    </div>
                </div>

                <div className="fimythsleg-text">
                    <h2>final release</h2>
                    <p>The most popular account of the Buddha’s final days can be found in the Mahaparinibbana Sutta of the Sutta Pitaka.  Soon after attaining enlightenment, the Buddha attracted a band of  followers and built a monastic order. After reaching the age of 80, he  gave his final instructions to the monks and passed away serenely in the  city of Kushinagara. He was liberated from the endless cycle of birth  and rebirth and thus achieved Mahaparinirvana or the final release from the world.</p>
                </div>



            </Container>

        </>
    );
}

export default FIMythsLegends;
