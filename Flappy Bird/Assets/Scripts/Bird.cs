using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Bird : MonoBehaviour
{

    private bool isDead;
    private Rigidbody2D rb;
    public float upForce;
    private Animator animator;
    private RotateBird rotateBird;

    void Awake()
    {
        rb = GetComponent<Rigidbody2D>();
        animator = GetComponent<Animator>();
        rotateBird = GetComponent<RotateBird>();
    }

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        BirdJump();
    }

    void BirdJump()
    {
        if (isDead == false)
        {
            if (Input.GetMouseButtonDown(0) || Input.GetButtonDown("Fire1"))
            {
                rb.velocity = Vector2.zero;
                rb.AddForce(new Vector2(0, upForce));
                animator.SetTrigger("Flap");
            }
        }
    }

    void OnCollisionEnter2D(Collision2D collision)
    {
        if (!collision.transform.CompareTag("Ceiling"))
        {           
            isDead = true;
            animator.SetBool("Die", true);            
            Invoke("BirdDie", 1f);
            rb.velocity = Vector2.zero;
            rotateBird.enabled = false;
        }        
    }

    void BirdDie()
    {
        GameController.instance.EnableGameOver();
    }
}
