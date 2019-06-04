using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[System.Serializable]
public class Boundary
{
    public float xMin, xMax, zMin, zMax;
}

public class PlayerController : MonoBehaviour{
    public float speed;
    private Rigidbody rb;
    public float tilt;
    public Boundary boundary;

    public GameObject shot;
    public Transform shotSpawn;
    public float fireRate;
    private float nextFire = 0.0f;

    private AudioSource audioSource;

    protected Joystick joystick;
    protected Joystick2 joybutton;

    public GameObject gamepad;

    void Start()
    {
         rb = GetComponent<Rigidbody>();
         audioSource = GetComponent<AudioSource>();
         if (Application.platform == RuntimePlatform.Android)
         {
            joystick = FindObjectOfType<Joystick>();
            joybutton = FindObjectOfType<Joystick2>();
         }
         else
         {
            gamepad.SetActive(false);
         }
    }

    void Update()
    {
        Shot();
        
    }

    void FixedUpdate()
    {
        Movement();
    }

    /*void Horizontal_Movement() {
        float horizontal_axis = Input.GetAxis("Horizontal");
        // rb.AddForce(new Vector3(speed*horizontal_axis, 0, 0));
        rb.velocity = new Vector3 (speed*horizontal_axis, 0.0f, 0.0f);
        rb.position = new Vector3(
            Mathf.Clamp(rb.position.x, boundary.xMin, boundary.xMax),
            0.0f,
            0.0f
            );
        rb.rotation = Quaternion.Euler(new Vector3(0.0f, 0.0f, rb.velocity.x*-tilt));
    }*/

    void Movement()
    {
        float horizontal_axis ;
        float vertical_axis;
        if (Application.platform == RuntimePlatform.Android)
        {
            horizontal_axis = joystick.Horizontal;
            vertical_axis = joystick.Vertical;
        }else
        {
            horizontal_axis = Input.GetAxis("Horizontal");
            vertical_axis = Input.GetAxis("Vertical");
        }
       // rb.AddForce(new Vector3(speed*horizontal_axis, 0, 0));
       rb.velocity = new Vector3(speed * horizontal_axis, 0.0f, speed * vertical_axis);
       rb.position = new Vector3(
           Mathf.Clamp(rb.position.x, boundary.xMin, boundary.xMax),
           0.0f,
           Mathf.Clamp(rb.position.z, boundary.zMin, boundary.zMax)
           );
       rb.rotation = Quaternion.Euler(new Vector3(0.0f, 0.0f, rb.velocity.x * -tilt));       
    }


   void Shot()
   {
       if (Application.platform == RuntimePlatform.Android)
       {
        if (joybutton.fire && Time.time > nextFire)
            {
                nextFire = Time.time + fireRate;
                GameObject clone = Instantiate(shot, shotSpawn.position, shotSpawn.rotation) as GameObject;
                audioSource.Play();
            }
        }else
        {
            if (Input.GetButton("Fire1") && Time.time > nextFire)
            {
                nextFire = Time.time + fireRate;
                GameObject clone = Instantiate(shot, shotSpawn.position, shotSpawn.rotation) as GameObject;
                audioSource.Play();
            }
        }
    }
}
