using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Pelota_Sounds : MonoBehaviour
{
    public AudioSource pelota;
    public AudioSource bloque;

    void Awake()
    {
        
    }

    void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Bloque"))
        {
            bloque.Play();
        }
        else
        {
            pelota.Play();
        }
    }
}
