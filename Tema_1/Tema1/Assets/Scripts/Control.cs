using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Control : MonoBehaviour {

	private int balas = 30;

	// Use this for initialization
	void Start () {

		if (this.balas == 30) {
			Debug.Log ("Tengo el cargador lleno");
		}
		else {
			Debug.Log("Necesitas recargar, quedan" + this.balas);
		}

	}
	
	// Update is called once per frame
	void Update () {		
		if (Input.GetKeyDown (KeyCode.P)) {
			this.balas--;
			if (this.balas == 30) {
				Debug.Log ("Tengo el cargador lleno");
			}
			else {
				Debug.Log("Necesitas recargar, quedan" + this.balas);
			}
		}
	}
}
