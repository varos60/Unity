using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraFollow : MonoBehaviour
{
    public Transform target;
    public float smoothing = 5f;
    
    Vector3 offset;

    Vector3 targetCamPos;        


    void Start()
    {
        offset = transform.position - target.position;    
    }

    void FixedUpdate()
    {
        targetCamPos = target.position + offset;        
        transform.position = Vector3.Lerp(transform.position, targetCamPos, smoothing * Time.deltaTime);      
    }
}
