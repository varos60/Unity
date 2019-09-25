using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Pelota : MonoBehaviour
{
    public float velocidadInicial = 600f;
    private Rigidbody rb;
    private bool enJuego = false;
    private Vector3 default_position;
    Transform barra;
    public ElementoInteractivo pantalla;
    // Start is called before the first frame update

    void Awake()
    {
        rb = GetComponent<Rigidbody>();
        barra = transform.parent.GetComponent<Transform>();        
    }


    void Start()
    {
        default_position = transform.position;
    }

    // Update is called once per frame
    void Update()
    {        
    }

    void FixedUpdate()
    {
        Inicio();
    }

    void Inicio()
    {
        if (!enJuego && (Input.GetButtonDown("Fire1") || pantalla.pulsado))
        {
            enJuego = true;
            transform.SetParent(null);
            rb.isKinematic = false;
            rb.AddForce(new Vector3(velocidadInicial, velocidadInicial, 0));
        }
    }

    public void ResetPosition()
    {
        transform.position = default_position;
        transform.SetParent(barra);
        enJuego = false;
        Detener();
    }

    public void Detener() {
        rb.isKinematic = true;
        rb.velocity = Vector3.zero;
    }
}
