using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Bloque : MonoBehaviour
{
    public GameObject particulas;
    public Puntos puntos;

    void OnCollisionEnter()
    {
        GameObject pa = Instantiate(particulas, transform.position, Quaternion.identity);        
        Destroy(gameObject);
        transform.SetParent(null);
        puntos.GanarPuntos();
        Destroy(pa, 5f);
        
    }    
}
