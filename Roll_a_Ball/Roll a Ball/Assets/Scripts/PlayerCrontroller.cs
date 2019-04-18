using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerCrontroller : MonoBehaviour {

	private Rigidbody rg;
	public float speed;

	void Start(){
		rg = GetComponent<Rigidbody> ();
	}

	void FixedUpdate () {
		float moveHorizontal = Input.GetAxis ("Horizontal");
		float moveVertical = Input.GetAxis ("Vertical");
		rg.AddForce (new Vector3(moveHorizontal, 0.0f, moveVertical)*speed);
	}
}
