using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RotateBird : MonoBehaviour
{
    public float MaxDownVelocity = -5f;
    public float MaxDownAngle = -90f;
    Rigidbody2D rb;

    void Awake()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    void Start()
    {
        
    }
    
    void Update()
    {
        if (rb)
        {
            float current_velocity = Mathf.Clamp(rb.velocity.y, MaxDownVelocity, 0f);
            float angle = (current_velocity / MaxDownVelocity) * MaxDownAngle;
            Quaternion rotation = Quaternion.Euler(0, 0, angle);
            transform.rotation = rotation;
        }
    }
}
