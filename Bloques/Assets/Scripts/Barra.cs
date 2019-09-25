using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Barra : MonoBehaviour
{
    public float speed;
    private Vector3 default_position;
    public ElementoInteractivo derecha;
    public ElementoInteractivo izquierda;
    // Start is called before the first frame update
    void Start()
    {
        default_position = transform.position;
    }

    // Update is called once per frame
    void Update()
    {
        Movement();
    }

    void Movement() {
        float direccion = izquierda.pulsado ? -1 : (derecha.pulsado ? 1 : Input.GetAxisRaw("Horizontal"));        
        
        if (direccion != 0)
        {
            float posX = transform.position.x + direccion * speed * Time.deltaTime;
            transform.position = new Vector3(Mathf.Clamp(posX, -8.0f, 8.0f), transform.position.y, transform.position.z);
        }        
    }

    public void ResetPosition()
    {
        transform.position = default_position;
    }
}
