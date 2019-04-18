using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Metodos_Variables : MonoBehaviour {

	public string nombre;
	// Use this for initialization
	void Start () {
		//this.MostrarUnMensaje ();
		//this.MostrarUnNombre ();
		this.MostrarNombreParametro ("Alba");
	}
	
	// Update is called once per frame
	void Update () {
		
	}

	void MostrarUnMensaje(){
		Debug.Log("Mensaje");
	}
	void MostrarUnNombre(){
		Debug.Log ("Nombre: " + this.nombre);
	}
	void MostrarNombreParametro(string nombre){
		Debug.Log ("Nombre: "+ nombre);
	}
}
