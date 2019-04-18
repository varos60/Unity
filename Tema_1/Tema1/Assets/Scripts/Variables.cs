using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Variables : MonoBehaviour {

	public int numeroEntero = 0;
	public string cadena = "Alvaro";
	public float decimales = 5.5f;
	public bool cierto = true;

	// Use this for initialization
	void Start () {
		Debug.Log (this.numeroEntero);
	}
	
	// Update is called once per frame
	void Update () {		
	}
}
