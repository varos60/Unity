using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Mover : MonoBehaviour {
	public float speed;
	public Vector3 posicionInicial;
	// Use this for initialization
	void Start () {
		//this.transform.position = this.posicionInicial;
	}
	
	// Update is called once per frame
	void Update () {
		this.transform.Translate (this.transform.forward * this.speed * Time.deltaTime);
	}
}
