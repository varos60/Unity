using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Translate_Rotate : MonoBehaviour
{
    public float move_speed;
    public float rotate_speed;

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.UpArrow)){
            transform.Translate(Vector3.forward * move_speed * Time.deltaTime);
        }
        if (Input.GetKey(KeyCode.DownArrow)){
            transform.Translate(-Vector3.forward * move_speed * Time.deltaTime);
        }
        if (Input.GetKey(KeyCode.LeftArrow)){
            Debug.Log(rotate_speed * Time.deltaTime);
            transform.Rotate(Vector3.up, -rotate_speed * Time.deltaTime);
        }
        if (Input.GetKey(KeyCode.RightArrow)){
            transform.Rotate(Vector3.up, rotate_speed * Time.deltaTime);
        }
    }
}
