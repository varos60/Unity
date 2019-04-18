using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PickUp_Objets : MonoBehaviour {

    public float rotation_speed = 2f;    

    // Update is called once per frame
    void Update () {
        transform.Rotate(new Vector3(15, 30, 45) * Time.deltaTime);
	}
}
