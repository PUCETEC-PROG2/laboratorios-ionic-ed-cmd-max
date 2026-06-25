import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewWillEnter } from '@ionic/react';
import './Tab3.css';
import React from 'react';
import { GithubUser } from '../interfaces/GithubUser';
import { fetchUserInfo } from '../services/GithubService';
import { setErrorHandler } from 'ionicons/dist/types/stencil-public-runtime';
import LoadingSpinner from '../components/LoadingSpinner';

const Tab3: React.FC = () => {
  const [userInfo, setUserinfo] = React.useState<GithubUser | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  useIonViewWillEnter(() => {
  setLoading(true);

  fetchUserInfo()
    .then((user) => {
      setUserinfo(user);
    })
    .catch((error) => {
      setErrorMsg(
        "Error al cargar la informacion del usuario: " + error
      );
    })
    .finally(() => {
      setLoading(false);
    });
});

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil</IonTitle>
          </IonToolbar>
        </IonHeader>

          <div className='card-container'>
            {userInfo && (
              <IonCard className="card">
                  <img src={userInfo.avatar_url} alt="Avatar"/>
                <IonCardHeader>
                  <IonCardTitle>{userInfo.name}</IonCardTitle>
                  <IonCardSubtitle>{userInfo.login}</IonCardSubtitle>
                </IonCardHeader>
                  <IonCardContent>
                    <p>{userInfo.bio}</p>
                  </IonCardContent>
              </IonCard> 
          )}
          {errorMsg && <IonText color="danger">{errorMsg}</IonText>}
          </div>
          {loading && <LoadingSpinner />}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
