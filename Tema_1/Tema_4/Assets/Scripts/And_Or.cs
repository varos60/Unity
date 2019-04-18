using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class And_Or : MonoBehaviour {

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		if (Time.time > 5.0f && Time.time < 7.0f) {
			Debug.Log (Time.time);
		}
	}
}
