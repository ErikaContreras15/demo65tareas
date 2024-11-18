
import { Injectable } from '@angular/core';
import { addDoc,  collection,  deleteDoc,  doc, Firestore, getDocs, updateDoc } from '@angular/fire/firestore';
import { Perro } from '../domain/perros';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PerrodfbService {
  constructor(private firestore: Firestore) { }

  addPerro(nombre: string, raza:string){
    addDoc(collection(this.firestore, 'perros'), {'nombre':nombre ,'raza': raza })
  }

  addPerroObj(perro: Perro) {
    addDoc(collection(this.firestore, 'perros'), { ...perro });
  }

  async getPerros(){
    const perrosCollection = collection (this.firestore, 'perros')
    const perrosSnapshot = await getDocs(perrosCollection)
    return perrosSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
  }
  
  updatePerro(id: string, perro: Perro) {
    const perroDoc = doc(this.firestore, `perros/${id}`);
    return updateDoc(perroDoc, { ...perro });
  }
  

  deletePerro(id: string) {
    const perroDoc = doc(this.firestore, `perros/${id}`);
    return deleteDoc(perroDoc);
  }
}