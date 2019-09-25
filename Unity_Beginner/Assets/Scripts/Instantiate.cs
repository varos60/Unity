using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Instantiate : MonoBehaviour
{
    public GameObject prefab;

    void OnMouseDown()
    {
        //Rigidbody rb =  Instantiate<Rigidbody>(prefab.GetComponent<Rigidbody>(), new Vector3(0f, 1.5f, 0f), transform.rotation);        
        GameObject go = Instantiate(prefab, new Vector3(0f, 1.5f, 0f), transform.rotation);
        Rigidbody rb = go.GetComponent<Rigidbody>();
        rb.AddForce(Vector3.up * 500f);
    }
}
