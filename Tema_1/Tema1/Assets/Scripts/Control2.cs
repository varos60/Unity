using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Control2 : MonoBehaviour {

	private int balas = 30;
	// Use this for initialization
	void Start () {

		switch (this.balas) {
		case 30:
			Debug.Log ("Cargador Lleno");
			break;
		default:
			break;		
		}
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
