import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Formulario de repositorio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Formulario de repositorio</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='form-container'>
          <IonInput
            className = "form-field"
            label = "Nombre"
            labelPlacement="floating"
            placeholder = "Ingrese la nombre del repositorio"
           />
           <IonTextarea
             className = "form-field"
            label = "description"
            labelPlacement="floating"
            placeholder = "Ingrese la description del repositorio"
            rows={6}
            />
             <IonButton
             className="form-field"
             expand="block"
             color="primary"
             >
              Guardar
             </IonButton>
            
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
