using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[System.Serializable]
public class Boundary
{
    public float xMin, xMax;
}

public class PlayerController : MonoBehaviour{
    public float speed;
    private Rigidbody rb;
    public float tilt;
    public Boundary boundary;

    void Start()
    {
         rb = GetComponent<Rigidbody>();
    }

    void FixedUpdate()
    {
        Movement();
    }

    void Movement() {
        float horizontal_axis = Input.GetAxis("Horizontal");
        // rb.AddForce(new Vector3(speed*horizontal_axis, 0, 0));
        rb.velocity = new Vector3 (speed*horizontal_axis, 0.0f, 0.0f);
        rb.position = new Vector3(
            Mathf.Clamp(rb.position.x, boundary.xMin, boundary.xMax),
            0.0f,
            0.0f
            );
        rb.rotation = Quaternion.Euler(new Vector3(0.0f, 0.0f, rb.velocity.x*-tilt));
    }
}
