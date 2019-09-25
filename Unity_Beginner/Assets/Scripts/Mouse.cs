using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Mouse : MonoBehaviour
{
    private Rigidbody rb;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }
    void OnMouseDown()
    {
        Debug.Log("Mouse Click");
        rb.AddForce(Vector3.up * 500f);
    }
}
