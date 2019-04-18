using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Click : MonoBehaviour {
	int cont = 0;
	// Update is called once per frame
	void Update () {
		/*Siempre que este pulsado
		if (Input.GetButton ("Fire1")){
			cont++;
			Debug.Log ("Numero de Clicks: " + cont);
		}*/
		//Cuando hace solo 1 click aunque lo mantengas pulsado
		if (Input.GetButtonDown ("Fire1")){
			cont++;
			Debug.Log ("Numero de Clicks: " + cont);
		}
		//GetButtonUp cuando sueltas el click
	}
}
