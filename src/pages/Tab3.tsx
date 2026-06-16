import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="card-container">
          <IonCard className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlRu0l-I-c4ZMqtetMnKbBnTChk_bj3aqfCg&s"
              alt="Avatar"
            />

            <IonHeader>
              <IonCardTitle>Eduardo Céspedes</IonCardTitle>
              <IonCardSubtitle>@eduardocespedes</IonCardSubtitle>
            </IonHeader>

            <IonCardContent>
              <p>
                Desarrollador de software con experiencia en aplicaciones
                móviles y web. Apasionado por la tecnología y el aprendizaje
                continuo.
              </p>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;